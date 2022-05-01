import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'It is time to focus better.',
    paragraph: 'Time your work with FocusInfinity! Change your habits, make use of Pomodoro techniques to improve your workflow and be at the top of your game with FocusInfinity.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                    <Image
                      src={require('./../../assets/images/icons8-timer-64.png')}
                      
                      width={64}
                      height={64} />
                 
                </div>
                <br></br>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Focus Timer
                    </h4>
                  <p className="m-0 text-sm">
                    Set a timer. Start working. Make every second of your productivity count. Get notified every time you finish a session.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                    <Image
                      src={require('./../../assets/images/icons8-music-64.png')}
                      
                      width={64}
                      height={64} />
                  
                </div>
                <br></br>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Ambient Sounds
                    </h4>
                  <p className="m-0 text-sm">
                    How much better would it be if you could be sitting at a Parisien Café while writing your thesis? Or work while theres rain pouring in the middle of January? Tune into one of the Ambient sounds which, scientifically, increase productivity.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                    <Image
                      src={require('./../../assets/images/icons8-list-64.png')}
                      
                      width={64}
                      height={64} />
                 
                </div>
                <br></br>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    To-Do List 
                    </h4>
                  <p className="m-0 text-sm">
                    Never miss out on any of your assignments ever again. List down your tasks in the to-do list, then edit them as you want.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;