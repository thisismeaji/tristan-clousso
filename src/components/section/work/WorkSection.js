import React from 'react';
import Image from 'next/image';
import Styles from "../work/worksection.module.css";

export default function WorkSection() {
  return (
    <section className={Styles.section}>
      <div className={Styles.work}>
          <div>
            <h1>Work Experience</h1>
          </div>
          <div>
            <div>
                <h2>Agency Work</h2>
                <h3>Grayerville Graphic Studio</h3>
                <ul>
                    <li>Head of Creatives (2020-2022)</li>
                    <li>Art Director (2018-2020)</li>
                </ul>
                <h3>JKLI Design Studio</h3>
                <ul>
                    <li>Senior Designer (2016-2018)</li>
                    <li>Junior Designer (2015-2016)</li>
                </ul>
            </div>
            <div>
                <h2>Freelance Work</h2>
                <h3>Full-time Illustrator (2022-present)</h3>
                <h3>Part-time Graphic Designer & Illustrator (2021-2022)</h3>
            </div>
          </div>
      </div>
    </section>
  );
}
