import Head from 'next/head'
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import ListInstuments from '../components/ListInstuments'
import * as S from './style'

export default function Home() {

  const [instruments, setInstruments] = useState([])
  const payloadInstruments = {
    m: 0,
    i: 2,
    n: 'GetInstruments',
    o: JSON.stringify({ OMSID: 1 }),
  };


  useEffect(() => {
    const ws = new WebSocket('wss://api.foxbit.com.br/');

    ws.addEventListener('open', () => {
      console.log('connected');
      ws.send(JSON.stringify(payloadInstruments));
    });

    ws.addEventListener('close', function close() {
      console.log('disconnected');
    });

    ws.addEventListener('message', function message(response) {
      const { n, o } = JSON.parse(response.data);
      const channel = n; // GetInstruments | SubscribeLevel1 | Level1UpdateEvent

      // RESPONSE WITH ALL CRYPTOS
      if (channel === 'GetInstruments') {
        setInstruments(JSON.parse(o))
      }

    });
  }, []);


  return (
    <div>
      <Head>
        <title>Foxbit - Frontend Challenge</title>
        <meta name="description" content="Foxbit frontend challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>Foxbit - Frontend Challenge</Title>
        <S.Container>
          {instruments.map(instrument => {
            return (
              <ListInstuments key={instrument?.InstrumentId} instrument={instrument} />
            )
          })}
        </S.Container>
      </main>
    </div>
  )
}
