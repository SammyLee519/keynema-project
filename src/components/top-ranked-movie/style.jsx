import styled from "@emotion/styled";
import { getWidth } from "@/constants";

export const SwiperContainer = styled.div`
  position: relative;
  padding: 0;

  &:hover .custom-prev,
  &:hover .custom-next {
    opacity: 1;
  }
`;

export const CustomNavButton = styled.button`
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
  ${(props) => (props.$isNext ? "right: 20px;" : "left: 20px;")}

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  border: 0.8px solid ${(props) => props.theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  padding: 0;

  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
  }

  &.swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RankingCard = styled.div`
  position: relative;
  height: 300px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 20px;

  /* 숫자 너비 + 포스터 너비 */
  width: ${(props) => getWidth(props.$rank, "desktop") + 160}px;

  @media (max-width: 1240px) {
    height: 270px;
    margin-right: 16px;
    width: ${(props) => getWidth(props.$rank, "tablet") + 140}px;
  }

  @media (max-width: 960px) {
    height: 240px;
    margin-right: 12px;
    width: ${(props) => getWidth(props.$rank, "tablet") + 120}px;
  }

  @media (max-width: 768px) {
    height: 210px;
    margin-right: 12px;
    width: ${(props) => getWidth(props.$rank, "mobile") + 100}px;
  }
`;

export const RankNumber = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  width: ${(props) => getWidth(props.$rank, "desktop")}px;
  font-size: 180px;
  font-weight: 900;
  font-family: ${(props) => props.theme.font.family};
  color: transparent;
  -webkit-text-stroke: 5px ${(props) => props.theme.colors.text};
  z-index: 1;
  pointer-events: none;
  line-height: 1;
  text-align: center;

  @media (max-width: 1240px) {
    font-size: 160px;
    width: ${(props) => getWidth(props.$rank, "tablet")}px;
    -webkit-text-stroke: 4px ${(props) => props.theme.colors.text};
  }

  @media (max-width: 960px) {
    font-size: 140px;
    width: ${(props) => getWidth(props.$rank, "tablet")}px;
    -webkit-text-stroke: 3px ${(props) => props.theme.colors.text};
  }

  @media (max-width: 768px) {
    font-size: 100px;
    width: ${(props) => getWidth(props.$rank, "mobile")}px;
    -webkit-text-stroke: 2px ${(props) => props.theme.colors.text};
  }
`;

export const Poster = styled.img`
  width: 160px;
  height: 240px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: block;
  margin-left: ${(props) => getWidth(props.$rank, "desktop")}px;
  z-index: 2;

  @media (max-width: 1240px) {
    width: 140px;
    height: 210px;
    margin-left: ${(props) => getWidth(props.$rank, "tablet")}px;
  }

  @media (max-width: 960px) {
    width: 120px;
    height: 180px;
    margin-left: ${(props) => getWidth(props.$rank, "tablet")}px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 150px;
    margin-left: ${(props) => getWidth(props.$rank, "mobile")}px;
  }
`;
