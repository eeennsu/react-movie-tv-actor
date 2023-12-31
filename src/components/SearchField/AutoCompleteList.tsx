import type { FC } from 'react';
import { SearchMovieResponse } from '../../apis/types/movieTypes';
import { SearchTvResponse } from '../../apis/types/tvTypes';
import { SearchPersonResponse } from '../../apis/types/personTypes';
import useSearchSelectStore from '../../zustand/search/useSearchSelectStore';
import SerachListItem from './AutoCompleteListItem';
import useSearchAutoListStore from '../../zustand/search/useSearchAutoListStore';

interface Props{
    movieResults?: SearchMovieResponse['results'];
    tvResults?: SearchTvResponse['results'];
    personResults?: SearchPersonResponse['results'];
    isDrawer?: boolean;
    onDrawerClose?: () => void;
}

const AutoCompleteList: FC<Props> = ({ movieResults, tvResults, personResults, isDrawer, onDrawerClose }) => {

    const { select } = useSearchSelectStore();
    const { visible } = useSearchAutoListStore();
    
    const _className = (visible ? 'opacity-100' : 'opacity-0 hidden');

    return (
        <div className={`${_className} absolute z-10 overflow-y-auto shadow-md w-60 max-h-56 md:max-h-72 left-24`}>
            <ul className='p-0 m-0 text-black list-none rounded bg-gray-200/80 top-16' >
                { 
                    select === 'movie' ? (
                        movieResults?.map((result) => (
                            <SerachListItem 
                                key={result.id} 
                                movieItem={result}
                                isDrawer={isDrawer}                               
                            />
                        ))
                    ) : select === 'tv' ? (
                        tvResults?.map((result) => (
                            <SerachListItem 
                                key={result.id} 
                                tvItem={result}
                                isDrawer={isDrawer}                               
                            />
                        ))
                    ) : (
                        personResults?.map((result) => (
                            <SerachListItem 
                                key={result.id} 
                                personItem={result}
                                isDrawer={isDrawer}                         
                            />
                        )) 
                    )
                }
            </ul> 
        </div> 
    );
};

export default AutoCompleteList;