package com.devsuperior.dscatalog.resources;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.transaction.Transactional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import com.devsuperior.dscatalog.dto.ProductDTO;
import com.devsuperior.dscatalog.repositories.tests.Factory;
import com.devsuperior.dscatalog.repositories.tests.TokenUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class ProductResourceItegrationTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private TokenUtil tokenUtil;

	@Autowired
	private ObjectMapper objectMapper;

	private Long existingId;
	private Long nonExistsId;
	private Long countTotalProducts;

	private String username;
	private String password;

	@BeforeEach
	void setUp() throws Exception {

		username = "maria@gmail.com";
		password = "123456";
		existingId = 1L;
		nonExistsId = 1000L;
		countTotalProducts = 25L;

	}

	@Test
	public void findAllShouldReturnSortedPageWhenSortedByName() throws Exception {
		ResultActions result = mockMvc.perform(get("/products?page=0&size=12&sort=name,asc", existingId)
				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON));

		result.andExpect(status().isOk());
		result.andExpect(jsonPath("$.totalElements").value(countTotalProducts));
		result.andExpect(jsonPath("$.content").exists());
		result.andExpect(jsonPath("$.content[0].name").value("Macbook Pro"));
		result.andExpect(jsonPath("$.content[1].name").value("PC Gamer"));
		result.andExpect(jsonPath("$.content[2].name").value("PC Gamer Alfa"));

	}

	@Test
	public void updateShouldReturnProductDTOWhenIdExists() throws Exception {

		ProductDTO productDTO = Factory.createProductDTO();
		
		String accessToken = tokenUtil.obtainAccessToken(mockMvc,username, password);

		String expectedName = productDTO.getName();
		String expectedDescription = productDTO.getDescription();

		String jsonBoby = objectMapper.writeValueAsString(productDTO);

		ResultActions result = 
				mockMvc.perform(put("/products/{id}", existingId)
				.header("Authorization","Bearer " + accessToken)
				.content(jsonBoby)
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON));

		result.andExpect(status().isOk());
		result.andExpect(jsonPath("$.id").value(existingId));
		result.andExpect(jsonPath("$.name").value(expectedName));
		result.andExpect(jsonPath("$.description").value(expectedDescription));
	}

	@Test
	public void updateShouldReturnNotFoundWhenIdDoesNotExists() throws Exception {
		
		String accessToken = tokenUtil.obtainAccessToken(mockMvc,username, password);

		ProductDTO productDTO = Factory.createProductDTO();

		String jsonBoby = objectMapper.writeValueAsString(productDTO);

		ResultActions result = 
				mockMvc.perform(put("/products/{id}", nonExistsId)
				.header("Authorization","Bearer " + accessToken)
				.content(jsonBoby)
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON));

		result.andExpect(status().isNotFound());

	}

}
