import { render, waitFor } from '@testing-library/react';
import LatestArticles from '../Components/LatestArticles';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

export const latestArticlesComponent = () => {
    test('fetches and displays articles', async () => {
      mock.onGet('/api/articles').reply(200, [{ id: 1, title: 'Article 1' }]);
    
      render(<LatestArticles />);
      
      await waitFor(() => {
        expect(screen.getByText('Article 1')).toBeInTheDocument();
      });
    });
}
