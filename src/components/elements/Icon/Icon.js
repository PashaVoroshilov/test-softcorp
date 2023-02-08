import styled from 'styled-components';

const IconStyles = styled.span`
  display: block;
  width: 200px;
  height: 200px;
`

const Icon = ({ src: Src, }) => {
    return (
        <IconStyles>
            <Src />
        </IconStyles>
    )
}

export default Icon
