import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

export default props =>
    <div id="experience">
        <div className="experience-text">
            Professional Experiences
        </div>
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="01/2018 – 02/2019"
            iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
            icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Del Grande</h4>
                <p>
                Full stack in the company, developing solutions for multiple products.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="09/2016 - 01/2017"
            iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
            icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Front End Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Real Networking</h4>
                <p>
                Development of the company's main product, a platform for communication and information sharing between companies.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="10/2015 – 08/2016"
            iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
            icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Developer Internship</h3>
                <h4 className="vertical-timeline-element-subtitle">Thought Works</h4>
                <p>
                Accelerator of Agile Methods, a partnership between
                Microsoft-PUCRS Innovation Center and ThoughtWorks.
                Over the course twelve Accelerator staffers work with sixhour
                dedication and a mentoring support from the
                Innovation Center and ThoughtWorks. With a vocational
                format, the initiative allows these students to develop a
                real product for a legitimate client.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="02/2013 – 08/2015"
            iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
            icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Network Assistant</h3>
                <h4 className="vertical-timeline-element-subtitle">High School Êxito</h4>
                <p>
                Responsible for assisting in the administration of the
                computer network and support to users in the hardware
                and software aspects, involving assembly, preservation,
                repairs and configurations.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="03/2011 – 09/2012"
            iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
            icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Internship in I.T.</h3>
                <h4 className="vertical-timeline-element-subtitle">UNICNEC</h4>
                <p>
                Responsible for providing computer assistance and user
                support for hardware and software, including assembly,
                repair and configuration.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013 – 2017"
            iconStyle={{ background: 'var(--secondary-color)', color: '#fff' }}
            icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                Canoas - RS, Brazil.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            iconStyle={{ background: 'var(--other2-color)', color: '#fff' }}
            />
        </VerticalTimeline>
    </div>