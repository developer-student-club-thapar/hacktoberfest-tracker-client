import PropTypes from 'prop-types';

export const reposType= {
    id: PropTypes.number,
    name: PropTypes.string,
    uname: PropTypes.string,
    totalPrOpen: PropTypes.string,
    totalCommits: PropTypes.string,
    totalIssues: PropTypes.string,
    url: PropTypes.string,
    desc: PropTypes.string,
    topics: PropTypes.string
}