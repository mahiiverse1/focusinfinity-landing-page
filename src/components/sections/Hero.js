import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Be the most <span className="text-color-primary">productive</span> version of yourself.
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              <i>FocusInfinity</i> helps you time your study, work and any task that you would want, along with letting you enjoy some ambient sounds in the background that have scientifically proven to increase productivity, all of this in the form of a Chrome Extension.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://github.com/mahiiverse1/focusinfinity-landing-page/tree/main">
                    Download
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/mahiiverse1/focusinfinity-landing-page/tree/main">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <a> <br>
          </br>
              <Image
                className="has-shadow"
                src={require('./../../assets/imgs/home.gif')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          </div>
          </section>
          
  )}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
