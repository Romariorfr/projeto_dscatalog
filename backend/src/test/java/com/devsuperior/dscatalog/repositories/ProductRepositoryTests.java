package com.devsuperior.dscatalog.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.devsuperior.dscatalog.entities.Product;
import com.devsuperior.dscatalog.repositories.tests.Factory;

@DataJpaTest
public class ProductRepositoryTests {

	@Autowired
	private ProductRepository repository;

	private long ExistingId;
	private long nonExistId;
	private Long countTotalProducts;

	@BeforeEach
	void setUp() throws Exception {
		ExistingId = 1L;
		nonExistId = 1000L;
		countTotalProducts = 25L;
	}

	@Test
	public void saveShouldPersistWithAutoIncrementWhenIdIsNull() {
		Product product = Factory.createProduct();
		product.setId(null);

		product = repository.save(product);

		Assertions.assertNotNull(product.getId());
		Assertions.assertEquals(countTotalProducts + 1, product.getId());

	}

	@Test
	public void deleteShouldDeleteObjectWhenIdExist() {

		repository.deleteById(ExistingId);

		Optional<Product> result = repository.findById(ExistingId);

		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void deleteShouldThrowEmptyResultDataAccessExceptionWhenIdNotExist() {

		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(nonExistId);
		});
	}

	@Test
	public void findByIdShouldReturnOptionalNotEmptyWhenIdExists() {

		Optional<Product> result = repository.findById(ExistingId);

		Assertions.assertTrue(result.isPresent());

	}
	
	@Test
	public void findByIdShouldReturnOptionalNullWhenIdDoesNotExists() {

		Optional<Product> result = repository.findById(nonExistId);

		Assertions.assertFalse(result.isPresent());

	}
	
	

}
