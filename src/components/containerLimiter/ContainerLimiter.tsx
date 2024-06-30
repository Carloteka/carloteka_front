import css from './ContainerLimiter.module.scss';

interface ContainerLimiterProps {
  children?: React.ReactNode;
}

export const ContainerLimiter = ({ children }: ContainerLimiterProps) => {
  return <div className={`limiter ${css.containerLimiter}`}>{children}</div>;
};
