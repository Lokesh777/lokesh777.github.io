import styles from "../styles/Project.module.css"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import React from 'react';
import { StackTooltip } from "../components/StackTooltip";

export function ProjectCard({ label, img, git, link, stacks, about, accent, video, company, companyLabel, onDetails }) {
  const gradient = accent
    ? `linear-gradient(135deg, ${accent[0]} 0%, ${accent[1]} 100%)`
    : "linear-gradient(135deg, #15153a 0%, #3a3a7a 100%)";

  const badge = company
    ? (companyLabel ? `${companyLabel}` : "Company Project")
    : "Personal Project";

  return (
    <article className={styles.projectCont}>
      <div
        className={styles.cardHeader}
        onClick={onDetails}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onDetails();
          }
        }}
        role="presentation"
      >
        {video ? (
          <iframe
            src={video}
            title={`${label} demo video`}
            className={styles.cardVideo}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : img ? (
          <img
            src={img}
            alt=""
            className={styles.cardImage}
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={styles.cardPlaceholder} style={{ background: gradient }} aria-hidden="true">
            <span className={styles.placeholderTitle}>{label}</span>
          </div>
        )}
        <span className={`${styles.badge} ${company ? styles.badgeCompany : styles.badgePersonal}`}>
          {badge}
        </span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>
          <button type="button" className={styles.titleBtn} onClick={onDetails}>
            {label}
          </button>
        </h3>

        <ul className={styles.stacksRow}>
          {stacks.map((stack, i) => (
            <li key={`${stack.name}-${i}`} className={styles.stackItem}>
              <StackTooltip name={stack.name} icon={stack.icon} />
            </li>
          ))}
        </ul>

        <p className={styles.cardAbout}>{about}</p>

        {(git || link) && (
          <div className={styles.cardLinks}>
            {git && (
              <a
                className={styles.linkBtn}
                href={git}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} source code on GitHub`}
              >
                <FaGithub aria-hidden="true" focusable="false" />
                <span>Code</span>
              </a>
            )}
            {link && (
              <a
                className={styles.linkBtn}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} live demo`}
              >
                <FaExternalLinkAlt aria-hidden="true" focusable="false" />
                <span>Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
