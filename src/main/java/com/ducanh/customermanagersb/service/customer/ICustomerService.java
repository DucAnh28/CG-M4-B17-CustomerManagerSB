package com.ducanh.customermanagersb.service.customer;

import com.ducanh.customermanagersb.model.Customer;
import com.ducanh.customermanagersb.service.IGeneralService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICustomerService extends IGeneralService<Customer> {
    Page<Customer> findAll(Pageable pageable);
    Page<Customer>findAllByNameContaining(String name, Pageable pageable);
}
