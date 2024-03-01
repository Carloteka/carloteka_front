import styled from 'styled-components';

interface ContainerLimiterProps {
  paddingTopMob: string;
  paddingTopDesc: string;
  children?: React.ReactNode;
}

type StyleProp = {
  $paddingmob?: string;
  $paddingdesc?: string;
};

export const ContainerLimiter = ({
  paddingTopMob,
  paddingTopDesc,
  children,
}: ContainerLimiterProps) => {
  return (
    <Limiter $paddingmob={paddingTopMob} $paddingdesc={paddingTopDesc}>
      {children}
    </Limiter>
  );
};

export const Limiter = styled.div<StyleProp>`
  margin: 0 auto;
  padding: ${({ $paddingmob }) => `${$paddingmob} 0 72px`};
  width: 288px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    padding: 64px 0;
    width: 960px;
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ $paddingdesc }) => `${$paddingdesc} 0 112px`};
    text-align: start;
    width: 1312px;
  }
`;
