import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import useDetailTv from '../hooks/tv/useDetailTv';
import TvBackdrop from '../features/detailTvPage/TvBackdrop';
import Casts from '../features/detailTvPage/Casts';
import DetailTvInfo from '../features/detailTvPage/DetailTvInfo';
import MainTvInfo from '../features/detailTvPage/MainTvInfo';
import useKeywordsTv from '../hooks/tv/useKeywordsTv';
import SimilarTvs from '../features/detailTvPage/SimilarTvs';
import useSimilarTvs from '../hooks/tv/useSimilarTvs';
import useCasts from '../hooks/tv/useCasts';
import { useIsFetching } from '@tanstack/react-query';
import { Spin } from 'antd';

const DetailTvPage: FC = () => {

    const { id } = useParams();

    const { data: tvData } = useDetailTv(id as string);
    const { data: keywordsData } = useKeywordsTv(id as string);
    const { data: similarData } = useSimilarTvs(id as string);
    const { data: castsData } = useCasts(id as string);
    
    const isLoading = useIsFetching();
        
    return (    
        isLoading ? (
            <div className='flex items-center justify-center h-132'>
                <Spin size='large'/>         
            </div>  
        ) : (
            <div className='flex flex-col'>
                <TvBackdrop backdrop_path={tvData?.backdrop_path}/>

                <MainTvInfo tvData={tvData} />      

                <DetailTvInfo tvData={tvData} keywordsData={keywordsData?.results} />       

                <Casts castsData={castsData}/>
                
                <SimilarTvs similarTvs={similarData}/>
            </div>
        )
    );
};

export default DetailTvPage;