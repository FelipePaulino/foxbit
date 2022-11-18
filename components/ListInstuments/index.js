import { useEffect, useState } from 'react';
import { Card } from '../Card'

export default function ListInstuments({ instrument }) {

    const [dataInstrument, setDataInstrument] = useState({});
    const { Product1Symbol, InstrumentId, Symbol } = instrument

    useEffect(() => {
        const ws = new WebSocket('wss://api.foxbit.com.br/');

        ws.addEventListener('open', () => {
            const payload = {
                m: 0,
                i: 2,
                n: 'SubscribeLevel1',
                o: JSON.stringify({ InstrumentId }),
            }
            ws.send(JSON.stringify(payload));
        });

        ws.addEventListener('message', function message(response) {
            const { n, o } = JSON.parse(response.data);
            const channel = n; // GetInstruments | SubscribeLevel1 | Level1UpdateEvent
            const data = JSON.parse(o);

            // FIRST RESPONSE
            if (channel === 'SubscribeLevel1') {
                setDataInstrument(data);
            }

            // UPDATES TO SUBSCRIBELEVEL1
            if (channel === 'Level1UpdateEvent') {
                setDataInstrument(data);
            }
        });
    }, []);

    const image = Product1Symbol ?
        `https://statics.foxbit.com.br/icons/colored/${Product1Symbol.toLowerCase()}.svg` : 'default-currency.svg'

    return (
        <>
            <Card
                logo={image}
                alt={Symbol}
                name={Product1Symbol}
                chipValue={dataInstrument.Rolling24HrPxChange}
                price={dataInstrument.LastTradedPx}
                volume={dataInstrument.Rolling24HrVolume}
            />
        </>
    )
}