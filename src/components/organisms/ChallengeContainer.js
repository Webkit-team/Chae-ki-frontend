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
    const [selectedCategory, setSelectedCategory] = useState(''); 
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const [status, setStatus] = useState('RECRUITING');

    const handleTabChange = (newValue) => {
        setSelectedTab(newValue);
        const statusMap = ['RECRUITING', 'ONGOING', 'ENDED'];
        setStatus(statusMap[newValue] || 'RECRUITING');
    };

    const handlePageChange = (event, newValue) => {
        setPage(newValue);
    };

    const handleCategoryChange = (category) => { 
        setSelectedCategory(category);
    };

    useEffect(() => {
        const fetchData = async () => {
            let url = `http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/challenges?status=${status}&page=${page - 1}`;
            if (selectedCategory) { 
                url += `&category=${selectedCategory}`;
            }
            try {
                const response = await axios.get(url);
                setData(response.data.content);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [status, page, selectedCategory]);

    return (
        <>
            <SubTitle>챌린지</SubTitle>
            <CustomTabs onTabChange={handleTabChange} labels={["모집중인 챌린지", "진행중인 챌린지", "종료된 챌린지"]} />
            <Box sx={{ display: "flex", alignItems: 'center', py:1 }}>
                <Category onCategoryChange={handleCategoryChange}/> 
                <Search onDataFetched={setData} status={status}/> 
            </Box>
            <ChallengeList data={data}/>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 5 }}>
                <Pagination count={5} page={page} onChange={handlePageChange} />
            </Box>
        </>
    );
}

export default ChallengeContainer;

