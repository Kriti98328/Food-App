package com.kritiagarwal.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kritiagarwal.Entity.Food;
import com.kritiagarwal.Service.FoodService;




@RestController
@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("/food")
public class FoodController {
	@Autowired
	private FoodService fservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Food fd)
	{
		String msg="FOOD ADDED SUCCESSFULLY";
				fservice.addData(fd);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Food>> getData()
	{
		List<Food> flist=fservice.getData();
	return new ResponseEntity<List<Food>>(flist,HttpStatus.OK);
}
	
	@DeleteMapping("/del/{fid}")
	public ResponseEntity<String> delData(@PathVariable String  fid)
	{
		String msg="DATA DELETED SUCCESSFULLY";
		fservice.delData(fid);
		return new ResponseEntity<String>(msg,HttpStatus.OK);
		
	}
	@PutMapping("/upd/{fid}")
	public ResponseEntity<Food> updateData(@PathVariable String fid, @RequestBody Food fd)
	{
	 Food f=fservice.updateData(fid,fd);
	return new ResponseEntity<Food>(f,HttpStatus.OK);

}
	@GetMapping("/fetch/{fid}")
	public ResponseEntity<Food> findByFoodId(@PathVariable String fid)
	{
		Food f=fservice.findByFoodId(fid);
		return new ResponseEntity<Food>(f,HttpStatus.OK);
	}
	

}
