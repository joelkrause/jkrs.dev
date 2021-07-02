const linkResolver = (doc) => {
    if (doc.type === 'post') {
        return `/post/${doc.uid}`
    }
    return '/'
}

module.exports = linkResolver