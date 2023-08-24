import { Button } from 'antd';
import Link from 'next/link';

const NewsPage = () => {
    return (
        <div>
            news Page
            <Button type='primary'>
                <Link href={ '/' }>Back To Home</Link>
            </Button>
        </div>
    );
};

export default NewsPage;
