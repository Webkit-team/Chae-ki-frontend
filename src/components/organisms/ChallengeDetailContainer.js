import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SubTitle } from '../atoms/Text';
import CustomTabs from '../atoms/CustomTabs';
import ChallengeInfo from '../molecules/ChallengeDetail/ChallengeInfo';
import ChakiTime from '../molecules/ChallengeDetail/ChaekiTime';
import ChakiToday from '../molecules/ChallengeDetail/ChaekiToday';
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

    const getDisabledTabs = (status) => {
        switch(status) {
            case 'RECRUITING':
                return [];  // [1, 2]로 바꿔야함 API 연결 후 
            case 'ONGOING':
                return []; 
            case 'ENDED':
                return [1]; 
            default:
                return [];
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
                return <ChakiToday id={id}/>;
            case 3:
                return <ChallengeGuide id={id}/>;
            default:
                return <ChallengeInfo id={id} setStatus={setStatus}/>; 
        }
    };
    
    return (
        <>
            <SubTitle>{getStatusText(status)}</SubTitle>
            <CustomTabs 
                onTabChange={handleTabChange} 
                labels={["챌린지 정보", "채키 타임", "채키 투데이", "챌린지 가이드"]}
                disabledTabs={getDisabledTabs(status)}
            />
            {renderTabContent()}
        </>
    );
};

export default ChallengeDetailContainer;
