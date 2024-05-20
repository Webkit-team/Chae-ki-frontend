import { useEffect, useState } from "react";
import CustomTabs from "../atoms/CustomTabs";
import { SubTitle } from "../atoms/Text";
import axios from "axios";
import { Category } from "../molecules/Challenge/Category";
import { Box, Pagination } from "@mui/material";
import Search from "../molecules/Challenge/Search";
import ChallengeList from "../molecules/Challenge/ChallengeList";

const ChallengeContainer = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1); 

    const handleTabChange = (newValue) => {
        setSelectedTab(newValue);
    };

    const handlePageChange = (event, newValue) => {
        setPage(newValue); 
    };

    useEffect(() => {
        const fetchData = async () => {
            const statusMap = ['RECRUITING', 'ONGOING', 'ENDED'];
            const status = statusMap[selectedTab] || 'RECRUITING'; 
            try {
                const response = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/challenges?status=${status}&page=${page - 1}`);
                setData(response.data.content);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [selectedTab, page]);

    return (
        <>
            <SubTitle>챌린지</SubTitle>
            <CustomTabs onTabChange={handleTabChange} labels={["모집중인 챌린지", "진행중인 챌린지", "종료된 챌린지"]} />
            <Box sx={{ display: "flex", alignItems: 'center', py:1 }}>
                <Category />
                <Search/>
            </Box>
            <ChallengeList data={data}/>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 5 }}>
                <Pagination count={5} page={page} onChange={handlePageChange} />
            </Box>
        </>
    );
}

export default ChallengeContainer;
