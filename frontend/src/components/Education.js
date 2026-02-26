import './Education.css';

const EDUCATION = [
  {
    degree: 'Bachelor of Technology',
    field: 'Information Technology',
    school: 'Bannari Amman Institute of Technology',
    period: '2021 — 2025',
    desc: 'Focused on software engineering, cloud computing, and distributed systems. Graduated with distinction.',
    grade: 'CGPA: 7/10',
  },
];

const CERTS = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024', icon: '☁️' },
  { name: 'Docker Certified Associate', issuer: 'Docker Inc.', year: '2023', icon: '🐋' },
  { name: 'GitHub Actions Certification', issuer: 'GitHub', year: '2023', icon: '⚙️' },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section-header reveal">
        <span className="section-num">05.</span>
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
      </div>

      <div className="edu-grid">
        <div className="edu-left">
          {EDUCATION.map((edu, i) => (
            <div className="edu-card reveal" key={i}>
              <div className="edu-period">{edu.period}</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <div className="edu-field">{edu.field}</div>
              <div className="edu-school">{edu.school}</div>
              <p className="edu-desc">{edu.desc}</p>
              <div className="edu-grade">{edu.grade}</div>
            </div>
          ))}
        </div>

        <div className="edu-right">
          <div className="certs-title reveal">Certifications</div>
          {CERTS.map((cert, i) => (
            <div className="cert-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="cert-icon">{cert.icon}</span>
              <div className="cert-info">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-meta">{cert.issuer} · {cert.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}