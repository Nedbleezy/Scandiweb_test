import styled from 'styled-components';

export const CardPageContainer = styled.div`
    margin-bottom: 2rem;
`;
export const CardContentLeft = styled.div``;
export const CardContentRight = styled.div`
    display: flex;
    justify-content: space-between;
    .btn-Wrapper {
        width: 12%;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    button {
        font-size: 1.5rem;
        cursor: pointer;
        background: #fff;
        border-width: 1.2;
        width: 40px;
        height: 40px;
        display: block;
    }
`;
export const CardContentRightImgWrapper = styled.div`
    position: relative;
    width: 88%;
    padding-bottom: 10px;

    .buttonGroup {
        position: absolute;
        right: 10%;
        bottom: 10%;
        display: flex;

        button {
            marginright: 10px;
            padding-left: 1px;
            padding-right: 2.9px;
            fontsize: 1.1rem;
            cursor: pointer;
            background: black;
            color: white;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const CardFlexWrapper = styled.div`
    display: flex;
    justifycontent: space-between;
    marginbottom: 1rem;
    borderbottom: 0.5px solid gray;
    paddingbottom: 10px;
`;
