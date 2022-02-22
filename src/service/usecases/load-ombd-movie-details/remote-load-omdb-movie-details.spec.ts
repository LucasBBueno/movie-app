import { mockLoadOmdbMovieDetail } from "domain/mocks/mockLoadOmdbMovieDetail"
import { RemoteLoadOmdbMovieDetails } from "./remote-load-omdb-movie-details"

describe('RemoteLoadOmdbMovieDetails', () => {
  it('should be able to load ombd movie detail', async () => {
    const loadOmdbMovieDetail = new RemoteLoadOmdbMovieDetails()
    const loadOmbbMovieDetailSpy = jest.spyOn(loadOmdbMovieDetail, 'load')
    loadOmbbMovieDetailSpy.mockImplementation(async () => mockLoadOmdbMovieDetail)

    const res = await loadOmdbMovieDetail.load({
      movieId: '12waad2'
    })
    
    expect(res).toEqual(mockLoadOmdbMovieDetail)
  })
})