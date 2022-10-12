package com.ducanh.customermanagersb.repository;

import com.ducanh.customermanagersb.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends PagingAndSortingRepository<Customer,Long> {
    Page<Customer> findCustomerByFirstName(String firstname, Pageable pageable);

}
