import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

function Home() {
  const [height, setHeight] = useState(window.screen.height);
  const [width, setWidth] = useState(window.screen.width);
  const [availHeight, setAvailHeight] = useState(window.screen.availHeight);
  const [availWidth, setAvailWidth] = useState(window.screen.availWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [orientation, setOoientation] = useState(
    window.screen.orientation.type
  );

  const updateWindowDimensions = () => {
    setHeight(window.screen.height);
    setWidth(window.screen.width);
    setAvailHeight(window.screen.availHeight);
    setAvailWidth(window.screen.availWidth);
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
    setOoientation(window.screen.orientation.type);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return (
    <>
      <div className={styles.header}>DEVICE INFO</div>
      <div className={styles.container}>
        <div className={styles.card}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio"
            target="blank"
            className={styles.label}
          >
            Device Pixel Ratio
          </a>
          <span className={styles.value}>{window.devicePixelRatio}</span>
        </div>

        <div className={styles.card}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Screen/height"
            target="blank"
            className={styles.label}
          >
            Window Height * Width
          </a>
          <span className={styles.value}>
            {height} * {width} css px
          </span>
        </div>

        <div className={styles.card}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Screen/availHeight"
            target="blank"
            className={styles.label}
          >
            Window Available Height * Width
          </a>
          <span className={styles.value}>
            {availHeight} * {availWidth} css px
          </span>
        </div>

        <div className={styles.card}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight"
            target="blank"
            className={styles.label}
          >
            Window Inner Height * Width
          </a>
          <span className={styles.value}>
            {innerHeight} * {innerWidth} css px
          </span>
        </div>

        <div className={styles.card}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation"
            target="blank"
            className={styles.label}
          >
            Orientation
          </a>
          <span className={styles.value}>{orientation}</span>
        </div>
      </div>
    </>
  );
}

export default Home;
