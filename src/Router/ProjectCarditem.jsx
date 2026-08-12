import styles from "../styles/Project.module.css"
import LinkIcon from "@mui/icons-material/Link"
import GitHubIcon from "@mui/icons-material/GitHub"
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
    <div
      className={styles.projectCont}
      onClick={onDetails}
      role="button"
      tabIndex={0}
      aria-label={`Open ${label} details`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onDetails();
        }
      }}
    >
      <div className={styles.cardHeader}>
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
          <img src={img} alt={label} className={styles.cardImage} />
        ) : (
          <div className={styles.cardPlaceholder} style={{ background: gradient }}>
            <span className={styles.placeholderTitle}>{label}</span>
          </div>
        )}
        <span className={`${styles.badge} ${company ? styles.badgeCompany : styles.badgePersonal}`}>
          {badge}
        </span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{label}</h3>

        <div className={styles.stacksRow}>
          {stacks.map((stack, i) => <StackTooltip key={i} name={stack.name} icon={stack.icon} />)}
        </div>

        <p className={styles.cardAbout}>{about}</p>

        {(git || link) && (
          <div className={styles.cardLinks}>
            {git && (
              <a
                className={styles.linkBtn}
                href={git}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon fontSize="small" />
                <span>Code</span>
              </a>
            )}
            {link && (
              <a
                className={styles.linkBtn}
                href={link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <LinkIcon fontSize="small" />
                <span>Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
