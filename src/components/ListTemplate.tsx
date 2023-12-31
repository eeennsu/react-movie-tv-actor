import type { FC, PropsWithChildren } from 'react';
import Divider from './Divider';

interface Props {
    isLast?: boolean;
}

const ListTemplate: FC<PropsWithChildren<Props>> = ({ children, isLast }) => {

    return (
        <div className='w-full'>
            <section className='grid grid-cols-1 gap-y-7 2xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:gap-2 md:gap-y-10 2xs:gap-x-1 xs:gap-x-3 xl:gap-x-4 '>
                {children}
            </section>        
            {isLast ? null : <Divider />}
        </div>
    );
};

export default ListTemplate;