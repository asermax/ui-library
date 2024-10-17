import styled from '@emotion/styled';

const AlertTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

type AlertType = typeof AlertTypes[keyof typeof AlertTypes];

interface Props {
  message: string;
  type?: AlertType;
}

const getColorByType = (type: AlertType) => {
  switch (type) {
    case AlertTypes.SUCCESS:
      return 'green';
    case AlertTypes.ERROR:
      return 'red';
    case AlertTypes.WARNING:
      return 'yellow';
    case AlertTypes.INFO:
    default:
      return 'blue';
  }
};

const AlertContainer = styled.div<{ type: AlertType }>`
  background-color: ${({ type }) => getColorByType(type)};
  color: ${({ type }) => (type === AlertTypes.WARNING ? 'black' : 'white')};
  padding: 1rem;
  border-radius: 0.25rem;
`;

export const Alert = ({ message, type = AlertTypes.INFO }: Props) => (
  <AlertContainer type={type}>
    {message}
  </AlertContainer>
);
