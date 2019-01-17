import React from 'react'
import { Link } from 'gatsby'

export default ({ current }) => (
  <ul className="nav-freelance">
    <li className={getClasses(current, 'designers-creatifs')}>
      <Link to="/prestation/designers-creatifs">Designers &amp; Creatifs</Link>
    </li>
    <li className={getClasses(current, 'developpeurs-mobile')}>
      <Link to="/prestation/developpeurs-mobile">Développeurs mobile</Link>
    </li>
    <li className={getClasses(current, 'developpeurs-web')}>
      <Link to="/prestation/developpeurs-web">Développeurs web</Link>
    </li>
    <li className={getClasses(current, 'experts-marketing')}>
      <Link to="/prestation/experts-marketing">Expert marketing</Link>
    </li>
    <li className={getClasses(current, 'formateurs')}>
      <Link to="/prestation/formateurs">Formateurs</Link>
    </li>
    <li className={getClasses(current, 'redaction-seo')}>
      <Link to="/prestation/redaction-seo">Rédaction &amp; SEO</Link>
    </li>
  </ul>
)

const getClasses = (current, slug) => {
  let classes = 'cat-item'

  if (current === slug) {
    classes += ' current-cat'
  }

  return classes
}
