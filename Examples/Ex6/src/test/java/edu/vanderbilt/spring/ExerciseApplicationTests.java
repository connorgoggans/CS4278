package edu.vanderbilt.spring;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ExerciseApplicationTests {

	@Autowired
	VideoService videoService;
	
	@Test
	public void contextLoads() {	
	}
	
	@Test
	public void videoServiceLoaded() {
		assertNotNull(videoService);
	}
	
	@Test
	public void addVideoReturnsAListOfVideos() {
		Video video = new Video();
		Iterable<Video> videos = videoService.addVideo(video);
		assertNotNull(videos);
		assertTrue(videos.iterator().hasNext());
	}
	
	@Test
	public void getAllVideosReturnsList(){
		Iterable<Video> videos = videoService.getAllVideos();
		assertNotNull(videos);
		assertTrue(videos.iterator().hasNext());
	}
	
	@Test
	public void addVideoWithFieldsReturnsCorrectVideo(){
		Video test = videoService.addVideoWithFields("Test", 10, "Horror", "testURL");
		assertEquals(test.getName(), "Test");
		assertEquals(test.getSize(), 10);
		assertEquals(test.getGenre(), "Horror");
		assertEquals(test.getURL(), "testURL");
	}
	
	@Test 
	public void updateVideoCorrectlyUpdatesFields(){
		Video test = new Video();
		videoService.addVideo(test);
		videoService.updateVideo(test.getId(),"Test", 10, "Horror", "testURL");
		test = videoService.getVideo(test.getId());
		assertEquals(test.getName(), "Test");
		assertEquals(test.getSize(), 10);
		assertEquals(test.getGenre(), "Horror");
		assertEquals(test.getURL(), "testURL");
		
	}
	
	@Test
	public void deleteVideo(){
		Video test = new Video();
		videoService.addVideo(test);
		videoService.deleteVideo(test.getId());
		Video b = videoService.getVideo(test.getId());
		assertNull(b);
	}

}
