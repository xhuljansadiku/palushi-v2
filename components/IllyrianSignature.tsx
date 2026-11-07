import { Anton, Instrument_Serif } from "next/font/google";
import styles from "./IllyrianSignature.module.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

/** Studio credit: discreet, always in English. */
export function IllyrianSignature() {
  return (
    <div className={`${styles.row} ${anton.variable} ${instrumentSerif.variable}`}>
      <span className={`${styles.line} ${styles.lineLeft}`} aria-hidden />
      <a
        href="https://illyrianpixel.com"
        target="_blank"
        rel="noopener"
        className={styles.pill}
        aria-label="Designed and developed by Illyrian Pixel (opens in a new tab)"
      >
        <span className={styles.medallion} aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG, no optimisation needed */}
          <img src="/images/illyrianpixel_logo.svg" alt="" width={26} height={24} className={styles.eagle} />
        </span>
        <span className={styles.text} aria-hidden>
          <span className={styles.kicker}>Designed &amp; Developed by</span>
          <span className={styles.name}>
            <span className={styles.illyrian}>Illyrian</span>
            <span className={styles.pixel}>Pixel</span>
          </span>
        </span>
        <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </a>
      <span className={`${styles.line} ${styles.lineRight}`} aria-hidden />
    </div>
  );
}
