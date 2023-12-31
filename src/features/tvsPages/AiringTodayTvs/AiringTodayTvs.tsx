import type { FC } from 'react';
import Category from '../../../components/Category';
import useAiringTodayTv from '../../../hooks/tv/useAiringTodayTvs';
import Card1 from '../../../components/Card/Card1';
import Slider from '../../../components/Slider';
import MediaSkeleton from '../../../components/Skeleton/MediaSkeleton';

const AiringTodayTvs: FC = () => {

    const { data, isLoading } = useAiringTodayTv();

    return (
        <article className='mt-5'>
            <Category>오늘 방영중</Category>            
            <Slider>
                {
                    isLoading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <MediaSkeleton key={i} />
                        ))
                    ) : (
                        data?.results.map((tv) => (
                            <Card1 
                                key={tv.id}
                                tv={tv}
                            />
                        ))
                    )
                }
            </Slider>  
        </article>        
    );
};

export default AiringTodayTvs;