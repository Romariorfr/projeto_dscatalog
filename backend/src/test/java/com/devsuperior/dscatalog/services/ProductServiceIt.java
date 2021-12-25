package com.devsuperior.dscatalog.services;

import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ProductServiceIt {

	@Autowired
	private ProductService productService;
	private Long existId;
	private Long nonExistsId;
	private Long countTotalProducts;

	@BeforeEach
	void setUp() throws Exception {
		existId = 1L;
		nonExistsId = 1000L;
		countTotalProducts = 25L;

	}
	
	

}
