import styles from './OnLineCheck.module.scss';

const OnLineCheck = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(0deg, rgb(96, 96, 216) 0%, rgba(255,255,255,1) 66%)',
        width: '100%',
        height: '100vh',
        margin: '0',
      }}
    >
      <div className={styles.container}>
        <svg
          className={styles.offlineSvg}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 32 32"
        >
          <path d="M4.259 23.467c-2.35 0-4.259 1.917-4.259 4.252 0 2.349 1.909 4.244 4.259 4.244 2.358 0 4.265-1.895 4.265-4.244-0-2.336-1.907-4.252-4.265-4.252zM0.005 10.873v6.133c3.993 0 7.749 1.562 10.577 4.391 2.825 2.822 4.384 6.595 4.384 10.603h6.16c-0-11.651-9.478-21.127-21.121-21.127zM0.012 0v6.136c14.243 0 25.836 11.604 25.836 25.864h6.152c0-17.64-14.352-32-31.988-32z"></path>
        </svg>
        <h1 className={styles.offlineTitle}>
          Hopa, separe ca nu mai ai internet{' '}
        </h1>
        <span className={styles.offlineText}>
          verifica conexiunea la internet si mai intra odata, sa speram ca va
          funtiona asa
        </span>
      </div>
    </div>
  );
};

export default OnLineCheck;
