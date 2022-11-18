import React from 'react';
import * as S from './style'

export const Card = ({ logo, alt, name, chipValue, price, volume }) => {

    const validatorValue = chipValue < 0

    return (
        <S.Container>
            <S.Box>
                <S.Logo src={logo} alt={alt} />
                <S.Chip $color={validatorValue}>
                    <S.ChipValue $color={validatorValue}>{chipValue && chipValue.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</S.ChipValue>
                </S.Chip>
            </S.Box>
            <S.Name>{name}</S.Name>
            <S.Price><S.Cifrao>R$ </S.Cifrao>{price && price.toLocaleString('pt-br', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</S.Price>
            <S.VolumeTitle>Volume (24h):</S.VolumeTitle>
            <S.VolumeValue>{volume && volume.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</S.VolumeValue>
        </S.Container>
    )
}