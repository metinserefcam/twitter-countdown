import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("06/07/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Metin Dönüyor</title>
        <meta name="description" content="Twitter Countdown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="timer-wrapper">
        <Image src="/twitter.png" height={150} width={150} className="image" />
        <h1>Days: {days}</h1>
        <h2>Hours: {hours}</h2>
        <h3>Minutes: {minutes}</h3>
        <h4>Seconds: {seconds}</h4>
      </div>
    </div>
  );
}
