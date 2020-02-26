import React from 'react'
import { render, wait, getByText, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { fetchShow as mockFetchShow } from './api'
import App from './App'

const mockData = {
    data: {
      id: 299,
      url: "http://www.tvmaze.com/shows/299/power",
      name: "Power",
      type: "Scripted",
      language: "English",
      status: "Ended",
      runtime: 60,
      premiered: "2014-06-07",
      officialSite: "https://www.starz.com/series/power/episodes",
      image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_portrait/204/511371.jpg",
        original: "http://static.tvmaze.com/uploads/images/original_untouched/204/511371.jpg"
      },
      summary: `<p><b>Power </b>tells the story of James "Ghost" St. Patrick, a wealthy New York City nightclub owner who caters to the city's elite. He wants to build an empire, turn the club into a Fortune 500 business, but there's just one problem: Ghost is living a double life. When he is not in the club, he is the kingpin of the most lucrative drug network in New York for a very high-level clientele. His marriage, family and business all become unknowingly threatened as he is tempted to leave his criminal life behind and become the rags-to-riches businessman he wants to be most of all.</p>`,
      _embedded: {
        episodes: [
          {
              id: 30669,
              url: "http://www.tvmaze.com/episodes/30669/power-1x01-not-exactly-how-we-planned",
              name: "Not Exactly How We Planned",
              season: 1,
              number: 1,
              airdate: "2014-06-07",
              airtime: "21:00",
              airstamp: "2014-06-08T01:00:00+00:00",
              runtime: 60,
              image: {
                      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/70/176941.jpg",
                      original: "http://static.tvmaze.com/uploads/images/original_untouched/70/176941.jpg"
          }
        },
        {
          id: 30669,
          url: "http://www.tvmaze.com/episodes/30669/power-1x01-not-exactly-how-we-planned",
          name: "Not Exactly How We Planned",
          season: 3,
          number: 1,
          airdate: "2014-06-07",
          airtime: "21:00",
          airstamp: "2014-06-08T01:00:00+00:00",
          runtime: 60,
          image: {
                  medium: "http://static.tvmaze.com/uploads/images/medium_landscape/70/176941.jpg",
                  original: "http://static.tvmaze.com/uploads/images/original_untouched/70/176941.jpg"
      }
    },
    {
      id: 30669,
      url: "http://www.tvmaze.com/episodes/30669/power-1x01-not-exactly-how-we-planned",
      name: "Not Exactly How We Planned",
      season: 2,
      number: 1,
      airdate: "2014-06-07",
      airtime: "21:00",
      airstamp: "2014-06-08T01:00:00+00:00",
      runtime: 60,
      image: {
              medium: "http://static.tvmaze.com/uploads/images/medium_landscape/70/176941.jpg",
              original: "http://static.tvmaze.com/uploads/images/original_untouched/70/176941.jpg"
  }
  },
  {
    id: 30669,
    url: "http://www.tvmaze.com/episodes/30669/power-1x01-not-exactly-how-we-planned",
    name: "Not Exactly How We Planned",
    season: 5,
    number: 1,
    airdate: "2014-06-07",
    airtime: "21:00",
    airstamp: "2014-06-08T01:00:00+00:00",
    runtime: 60,
    image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/70/176941.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/70/176941.jpg"
  }
  }
        ]
      }
    }
  }

jest.mock('./api') // important

test('renders title to the screen', async () => {
    mockFetchShow.mockResolvedValueOnce(mockData) // important

    const { getByTestId } = render(<App />)

    await wait(() => {
        getByTestId(/title/i)
    })

    expect(getByTestId(/title/i)).toBeTruthy()
})

test('render dropdown menu', async () => {
    mockFetchShow.mockResolvedValueOnce(mockData)

    const { queryAllByText, getByText } = render(<App />)

    await(() => {
        getByText(/select a season/i)
    })
    
    userEvent.click(getByText(/select a season/i))
    expect(queryAllByText(/season/i)).toHaveLength(5)
})

// test('renders cards to the screen', async () => {
//     mockFetchShow.mockResolvedValueOnce(mockData)

//     //Arrange
//     const { queryAllByTestId, rerender, queryByTestId } = render(<App/>)

//     getByText(/Fetching data.../i)

//     //Act
//     await wait(() => {
//         queryAllByTestId(/fetching/i)
//     })

//     //Assert
    
//     expect(queryAllByTestId(/fetching/i)).toBeTruthy()

//     //Rerender
//     rerender(<App />)
//     expect(queryAllByTestId(/fetching/i)).toHaveLength(0)
// })

// // jest.mock('./api')
// // console.log(mockFetchShow)

// test('App fetches image with Stranger Things episodes dropdown menu', async () => {
//     //mockFetchShow.mockResolvedValueOnce()
//     //Arrange - set variables to all elements on the page
//     const { getByText, getByTestId, debug } = render(<App />)

//     //getByTestId('dropdown');

//     userEvent.click(getByText(/Select a season/i));
//     getByText(/Fetching data.../i);
//     await wait(() => {
//         getByTestId('episodes')
//     })
//     debug()
//     //getByText(/season 1/i);

// })

