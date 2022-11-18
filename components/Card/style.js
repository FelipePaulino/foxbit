import styled from 'styled-components'

export const Container = styled.div`
    width: 176px;
    padding 24px;
    border-radius: 20px;
    box-shadow:  0 0 20px rgba(0, 0, 0, 0.1);
    margin: 20px;
    color: rgb(29, 29, 33);
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const Chip = styled.div`
    width: 58px;
    height: 20px;
    background: ${({ $color }) => $color ? 'rgb(252, 237, 237)' : 'rgb(235, 250, 244)'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px; 
`;

export const ChipValue = styled.span`
    font-size: 12px;
    color: ${({ $color }) => $color ? 'rgb(92, 48, 48)' : 'rgb(33, 71, 57)'};
`;

export const Logo = styled.img`
    width: 28px;
    heigth: 28px;
`;

export const Name = styled.h3`
    margin-top: 4px;
    font-size: 16px;
    margin-bottom: 0;
`;

export const Price = styled.p`
    margin-top: 8px; 
    font-size: 20px;  
    margin-bottom: 0; 
`;

export const Cifrao = styled.span`
    color: rgb(183, 184, 190);
`;

export const VolumeTitle = styled.p`
    color: rgb(111, 112, 117);
    font-size: 10px;
    margin-bottom: 0;
    margin-top: 20px;
`;

export const VolumeValue = styled.p`
    margin-top: 0;
    font-size: 12px;
    margin-bottom: 0;
`;

