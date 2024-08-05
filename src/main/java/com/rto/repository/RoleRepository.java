package com.rto.repository;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rto.entities.Role;
import com.rto.entities.RoleEnum;

public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByRoleName(RoleEnum roleName);

	Set<Role> findByRoleNameIn(Set<RoleEnum> roles);
}