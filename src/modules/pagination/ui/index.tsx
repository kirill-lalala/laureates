import * as S from "./styles";

type Years = {
  min: number;
  max: number;
};

type Props = {
  years: Years;
  setYears: (cb: (years: Years) => Years) => void;
};

const Pagination = (props: Props) => {
  const { years, setYears } = props;

  const onNextClick = () => {
    setYears((prev) => ({
      min: prev.min + 10,
      max: prev.max + 10,
    }));
  };

  const onPrevClick = () => {
    setYears((prev) => ({
      min: prev.min - 10,
      max: prev.max - 10,
    }));
  };

  return (
    <S.Container>
      <S.Button disabled={years.min <= 1900} onClick={onPrevClick}>
        -10 years
      </S.Button>
      <S.View>{`${years.min} - ${years.max}`}</S.View>
      <S.Button disabled={years.max >= 2021} onClick={onNextClick}>
        + 10 years
      </S.Button>
    </S.Container>
  );
};

export default Pagination;
