import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function ProfessionalSkill() {
  return (
      <div className='d-flex justify-content-between mb-5'>
        <div className='progresses' >
            <label>HTML</label>
            <ProgressBar animated now={75} />
            <label>CSS</label>
            <ProgressBar animated now={65} />
            <label>JavaScript</label>
            <ProgressBar animated now={70} />
        </div>
        <div className='progresses2'>
            <label>NodeJS</label>
            <ProgressBar animated now={50} />
            <label>ReactJs</label>
            <ProgressBar animated now={65} />
            <label>Firebase</label>
            <ProgressBar animated now={40} />
        </div>
    </div>
  )
}
