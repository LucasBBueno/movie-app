import { mockSearchOmbMovies } from "domain/mocks/mockSearchOmbdMovies"
import { RemoteSearchOmbdMovies } from "./remote-load-ombd-movies"

describe('RemoteLoadOmbdMovies', () => {
  it('should be able to load ombd movies', async () => {
    const searchOmbMovies = new RemoteSearchOmbdMovies()
    const searchOmbMoviesSpy = jest.spyOn(searchOmbMovies, 'search')
    searchOmbMoviesSpy.mockImplementation(async () => mockSearchOmbMovies)

    const res = await searchOmbMovies.search({
      name: 'Spider',
    })
    
    expect(res).toEqual(mockSearchOmbMovies)
  })
})