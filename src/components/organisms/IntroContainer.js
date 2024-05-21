import { Box, Container, Step, StepContent, StepLabel, Stepper, Button, StepButton } from "@mui/material";
import { SubTitle, Text1, Text2, Text3, Text4 } from "../atoms/Text";
import CustomTabs from "../atoms/CustomTabs";
import { useState } from "react";

import stepImg1 from "../../assets/introImages/step1_1.png";
import stepImg2 from "../../assets/introImages/step2_1.png";


const IntroContainer = () => {
    
    const [selectedTab, setSelectedTab] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    const handleTabChange = (newValue) => {
        setSelectedTab(newValue);
        setActiveStep(0);
    }

    // 다음, 이전 버튼 클릭
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    // 스텝 직접 클릭
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    // UI 완성되고 난 뒤 사진 추가
    const ChallengeIntro = [
        {
            image: stepImg1,
            text: "챌린지 탭에서 완독에 도전하고 싶은 챌린지를 선정합니다. 도서 카테고리별, 그리고 도서명과 저자명으로 챌린지에 등록된 도서를 검색할 수 있습니다.",
            seq: "STEP1",
            title: "완독하고 싶은 챌린지 선정"
        },
        {
            image: stepImg2,
            text: "챌린지 참가 버튼을 클릭하여 모집중인 챌린지에 참가할 수 있습니다.",
            seq: "STEP2",
            title: "챌린지 참가"
        },
        {
            image: stepImg2,
            text: "채키 타이머를 사용하여 하루 할당량을 설정합니다. 목표 시간을 채우면, 채키 투데이 작성란으로 이동할 수 있습니다. 타이머는 무제한으로 사용하실 수 있으며, 채키 투데이 작성은 하루에 한 번만 가능합니다.",
            seq: "STEP3",
            title: "채키 타이머 설정"
        },
        {
            image: stepImg2,
            text: "오늘 읽은 페이지 수와 오늘의 감상평을 작성합니다. 마음에 드는 구절, 토의할 주제 등 감상평은 자유롭게 작성할 수 있으며, 이는 다른 사용자들과 함께 공유됩니다.",
            seq: "STEP4",
            title: "채키 투데이 작성"
        },
        {
            image: stepImg2,
            text: `각 주차별과 요일별로 본인이 작성한 채키 투데이를 모아보실 수 있습니다.
            채키 투데이 작성 유무 현황판이 함께 제공되어 스스로 동기부여를 일으킬 수 있습니다.
            또한 작성한 채키 투데이는 다른 사용자들에게 공개되어, ~~`,
            seq: "STEP5",
            title: "채키 투데이 조회"
        },
        {
            image: stepImg2,
            text: "챌린지가 진행되는 기간의 주 별로 다른 사용자들이 작성한 채키 투데이에 대한 댓글을 작성할 수 있습니다.",
            seq: "STEP6",
            title: "채키 위크 작성"
        },
        {
            image: stepImg2,
            text: `수고하셨습니다! 챌린지 기간 내, 채키 투데이 작성창에서 마지막 페이지 수를 입력하면 챌린지에 성공한 것입니다.
            포인트를 획득하여 등급을 올리실 수 있으며, 등급별로 제공되는 쿠폰을 받으실 수 있습니다.
            쿠폰은 '알라딘'과 연동되어 도서 구매에 이용하실 수 있습니다.`,
            seq: "STEP7",
            title: "챌린지 종료"
        },
    ];

    const ReviewIntro = [
        {
            image: stepImg2,
            text: "도서후기설명1~~~",
            seq: "STEP1",
            title: "도서 선정"
        },
        {
            image: stepImg1,
            text: "도서후기설명2~~~",
            seq: "STEP2",
            title: "도서 후기 작성"
        }
    ];

    const renderStepContent = (step) => {
        const item = selectedTab === 0 ? ChallengeIntro[step] : ReviewIntro[step];
        if (!item) return null;

        return (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center", mb: 1 , pt:5}}>
                <img src={item.image} alt="description" width={700} height={350} />
                <Box sx={{ width: "80%", height: 100, pt: 5 }}>  
                    <Box>
                        <Text3>{item.text}</Text3>
                    </Box>
                </Box>
            </Box>
        );
    };


    const showTabContent = () => {
        switch (selectedTab) {
            case 0:
                return (
                    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Box sx={{display:"flex", width:800, height: 80, mb: 3, backgroundColor:"#d9d9d9", justifyContent:"center", alignItems:"center" }}>
                            <Text2>채키는 책을 읽고 사람들과 소통할 수 있는 서비스를 제공합니다.</Text2>
                        </Box>
                        
                        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
                            {ChallengeIntro.map((item, index) => (
                                <Step key={index}>
                                    <StepButton onClick={handleStep(index)}>
                                        {item.title}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>

                        {renderStepContent(activeStep)}

                        <Box sx={{ display:"flex", width:"80%", mt: 3, mb: 5, alignItems:"center", justifyContent:"center" }}>
                            <Box sx={{display:"flex", gap:30}}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    Back
                                </Button>

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    disabled={activeStep === ChallengeIntro.length - 1} 
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    {activeStep === ChallengeIntro.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </Box>
                        
                    </Box>
                );

            case 1:
                return (
                    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>   
                        <Box sx={{display:"flex", width:800, height: 80, mb: 3, backgroundColor:"#d9d9d9", justifyContent:"center", alignItems:"center" }}>
                            <Text2>채키는 책을 읽고 사람들과 소통할 수 있는 서비스를 제공합니다.</Text2>
                        </Box>   

                        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
                            {ReviewIntro.map((item, index) => (
                                <Step key={index}>
                                    <StepButton onClick={handleStep(index)}>
                                        {item.title}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>

                        {renderStepContent(activeStep)}

                        <Box sx={{ display:"flex", width:"80%", mb: 2, alignItems:"center", justifyContent:"center" }}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    disabled={activeStep === ReviewIntro.length - 1} 
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    {activeStep === ReviewIntro.length - 1 ? 'Finish' : 'Next'}
                
                                </Button>
                            </div>
                        </Box>
                        
                    </Box>
                );

            default:
                return <Text4>채키는 책을 읽고 사람들과 소통할 수 있는 서비스를 제공합니다.</Text4>;
        }
    }

    return (
        <Container>
            <SubTitle>서비스 소개</SubTitle>

            <CustomTabs onTabChange={handleTabChange} labels={["챌린지", "도서후기"]}></CustomTabs>

            <Box sx={{ pt: 3 }}>
                {showTabContent()}
            </Box>

        </Container>
    );
}


export default IntroContainer;