import React from 'react'

import { connect } from 'react-redux'

import './score.style.scss'

const Score = ({currentScore}) => (
<div className='score'>
    <h1>{currentScore}</h1>
    <h2>Your score</h2>
</div>
)

const mapStateToProps = state => ({
    currentScore: state.score.currentScore
})

export default connect(mapStateToProps)(Score) 