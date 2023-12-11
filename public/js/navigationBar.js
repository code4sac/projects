/**
 * Initialize navigation bar scripts.
 * Usage:
 * ```js
 * initNavigationBar()
 * ```
 */
const initNavigationBar = () => {
  const [linkChangeFrom, linkChangeTo] = getLinkDestination()
  listenForNavbarLinkChange(linkChangeFrom, linkChangeTo)
  listenForNavbarExtend()
}

/**
 * Handle navigation bar link changes.
 * Toggle selected class.
 */
function handleNavbarChange(event) {
  setLinkDestination()
  document.getElementById('navbar-toolbar-extended').classList.toggle('hidden')
}


/**
 * Handle extended navigation bar trigger. Toggle selected class.
 */
function handleNavbarExtend(event) {
  setLinkDestination()
  document.getElementById('navbar-toolbar').style.overflow = 'visible'
  document.getElementById('navbar-toolbar-extended').classList.toggle('hidden')
}

/**
 * Listen for an action to trigger the extended navigation bar.
 */
function listenForNavbarLinkChange(linkChangeFrom, linkChangeTo) {
  document.querySelectorAll('.navbar-link').forEach(element => element.addEventListener('click', handleNavbarChange))
}
/**
 * Listen for navigation bar link changes.
 */
function listenForNavbarExtend() {
  document.querySelectorAll('.navbar-extended-parent-link').forEach(element => element.addEventListener('click', handleNavbarExtend))
}

/**
 *
 * @returns {(string|string)[]}
 */
function getLinkDestination() {
  const storageFrom = localStorage.getItem('navbarLinkChangeFrom')
  const storageTo = localStorage.getItem('navbarLinkChangeTo')
  const linkChangeFrom = storageFrom ? storageFrom : 'home'
  const linkChangeTo = storageTo ? storageTo : ''
  return [linkChangeFrom, linkChangeTo]
}

/**
 *
 */
function setLinkDestination() {
  // const linkNumber = links.length
  // element.classList.toggle('navbar-link-selected')
}

export default initNavigationBar