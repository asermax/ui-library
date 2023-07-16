import type { ComponentProps } from "react";
import styled from "@emotion/styled";

const SVGFilter = styled.svg`
  display: block;
  height: 0;
  width: 0;
`;
const BaseButton = styled.button`
  background: none;
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.7rem 1.8rem;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  color: ${({ color }) => color};
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  border: 0.25rem solid ${({ color }) => color};
  border-radius: 0;
  padding: 1.2rem 3.4rem;
  position: relative;
  transition: all 700ms ease;

  .content {
    position: relative;
    z-index: 1;
  }

  .blobs {
    height: 100%;
    filter: url(#goo);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: -3px;
    right: -1px;

    div {
      background-color: ${({ color }) => color};
      width: 34%;
      height: 100%;
      border-radius: 100%;
      position: absolute;
      transform: scale(1.4) translateY(125%) translateZ(0);
      transition: all 700ms ease;

      &:nth-child(1) {
        left: -5%;
      }

      &:nth-child(2) {
        left: 30%;
        transition-delay: 60ms;
      }

      &:nth-child(3) {
        left: 66%;
        transition-delay: 25ms;
      }
    }
  }

  &:hover {
    color: #fff;
    .blobs {
      div {
        transform: scale(1.4) translateY(0) translateZ(0);
      }
    }
  }
`;

interface BaseProps {
  color: string;
}
type Props = BaseProps & ComponentProps<typeof BaseButton>;

export const Button = ({ children, ...props }: Props) => (
  <BaseButton {...props}>
    <span className="content">{children}</span>
    <div className="blobs">
      <div />
      <div />
      <div />
    </div>
    <SVGFilter>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </SVGFilter>
  </BaseButton>
);
