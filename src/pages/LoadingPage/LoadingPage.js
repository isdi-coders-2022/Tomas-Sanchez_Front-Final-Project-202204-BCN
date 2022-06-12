import LoadingPageContainer from "./LoadingPageStyled";

const LoadingPage = () => {
  return (
    <LoadingPageContainer>
      <div className="loader">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </LoadingPageContainer>
  );
};

export default LoadingPage;
