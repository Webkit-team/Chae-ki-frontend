import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SubTitle } from '../atoms/Text';
import CustomTabs from '../atoms/CustomTabs';
import ChallengeInfo from '../molecules/ChallengeDetail/ChallengeInfo';
import ChakiTime from '../molecules/ChallengeDetail/ChaekiTime';
import ChakiWeek from '../molecules/ChallengeDetail/ChaekiToday';
import ChallengeGuide from '../molecules/ChallengeDetail/ChallengeGuide';

const ChallengeDetailContainer = () => {
    const [status, setStatus] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);
    const { id } = useParams(); 

    const getStatusText = (status) => {
        switch(status) {
            case 'RECRUITING':
                return '모집중인 챌린지';
            case 'ONGOING':
                return '진행중인 챌린지';
            case 'ENDED':
                return '종료된 챌린지';
            default:
                return '';
        }
    };
    
    const handleTabChange = (newValue) => {
        setSelectedTab(newValue);
    };
    
    const renderTabContent = () => {
        switch (selectedTab) {
            case 0:
                return <ChallengeInfo id={id} setStatus={setStatus} status={status}/>;
            case 1:
                return <ChakiTime id={id}/>;
            case 2:
                return <ChakiWeek id={id}/>;
            case 3:
                return <ChallengeGuide id={id}/>;
            default:
                return <ChallengeInfo id={id} setStatus={setStatus}/>; 
        }
    };
    
    return (
        <>
            <SubTitle>{getStatusText(status)}</SubTitle>
            <CustomTabs onTabChange={handleTabChange} labels={["챌린지 정보", "채키 타임", "채키 투데이", "챌린지 가이드"]} />
            {renderTabContent()}
        </>
    );
};

export default ChallengeDetailContainer;
