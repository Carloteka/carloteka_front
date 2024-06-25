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
    <Limiter
      className="limiter"
      $paddingmob={paddingTopMob}
      $paddingdesc={paddingTopDesc}
    >
      {children}
    </Limiter>
  );
};

export const Limiter = styled.div<StyleProp>`
  margin: 0 auto;
  padding: ${({ $paddingmob }) => `${$paddingmob} 16px 72px`};
  text-align: center;

  @media screen and (min-width: 834px) {
    padding: 56px 0;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ $paddingdesc }) => `${$paddingdesc} 0 88px`};
    text-align: start;
  }
`;
