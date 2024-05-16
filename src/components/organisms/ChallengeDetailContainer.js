import React, { useState } from 'react';
import { SubTitle } from '../atoms/Text';
import CustomTabs from '../atoms/CustomTabs';
import ChallengeInfo from '../molecules/ChallengeDetail/ChallengeInfo';

const ChallengeDetailContainer = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (newValue) => {
        setSelectedTab(newValue);
    };
    
    return (
        <>
            <SubTitle>챌린지</SubTitle>
            <CustomTabs onTabChange={handleTabChange} labels={["모집중인 챌린지", "진행중인 챌린지", "종료된 챌린지"]} />
            <ChallengeInfo/>
        </>
    );
};

export default ChallengeDetailContainer;